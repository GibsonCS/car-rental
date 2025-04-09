import { faker } from '@faker-js/faker'
import { writeFile } from 'fs/promises'
import { Car } from '../src/models/car.js'
import { join } from 'path'
import { CarCategory } from '../src/models/carCategory.js'

const seed = () => {
    const basePath = join(process.cwd(), '/database')
    const write = async (fileName, data) => await writeFile(join(basePath, fileName), data)
    
    const MAX_ITEM = 2
    const cars = []

    const carCategory = new CarCategory({
        id: faker.string.uuid(),
        name: faker.vehicle.type(),
        carIds: [],
        price: faker.finance.amount({min: 20, max: 100})
    })
    
    for (let i = 0; i <= MAX_ITEM; i++) {
        const car = new Car(
            {
                id: faker.string.uuid(),
                name: faker.vehicle.model(),
                releaseYear: faker.date.past().getFullYear(),
                available: true,
                gasAvailable: true
            }
        )
        cars.push(car)
        carCategory.carIds.push(car.id) 
    }
    write('car.json', JSON.stringify(cars))
    write('carCategory.json', JSON.stringify(carCategory))
    
    
    
}

seed()