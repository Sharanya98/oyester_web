import Agent from './agent'

interface Data {
    id: number,
    Name: string,
    Location: string,
    Industry: string,
    Agent: {
        id: string,
        contact: string,
        Name: string,
        Email: string,        
        Department: string
    }
}  

export default Data