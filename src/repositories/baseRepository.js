import {readFile} from 'fs/promises'

export class BaseRepository {
    constructor({file}) {
        this.file = file
    }

    async findById() {
        const category = await readFile(this.file)

        console.log(category)
    }

    
}


