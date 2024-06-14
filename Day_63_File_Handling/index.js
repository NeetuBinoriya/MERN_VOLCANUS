import { readFile, writeFile, appendFile, mkdir, readdir } from 'fs/promises'

const readFileContent = async (filepath) => {
    try {
        const data = await readFile(filepath, 'utf-8')
        console.log(data);
    } catch (error) {

    }

}
// readFileContent('sample.txt');

const createFile = async (filepath, content) => {
    await writeFile(filepath,content)
}
// createFile('index.html', 'This is my Index html file....')
// createFile('index.java', 'This is my Index html file....')
// createFile('index.mp4', 'This is my Index html file....')


const appendToFile = async (filepath, content) =>{
    await appendFile(filepath,content)
}

// appendToFile('sample.php','This is Extra Content....')

const createDirectory = async (dirPath) =>{

    await mkdir(dirPath)
}

// createDirectory('Java/Polymorphism')

const readToDir = async (dirPath)=>{
    const files = await readdir(dirPath)
    console.log(files);
}

readToDir('Components')