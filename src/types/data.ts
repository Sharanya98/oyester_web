import Agent from './agent' 

interface Data {
    name: string,
    agentName: string,
    occupation: string,
    phone: string,
    location: string,
    requirement: string,
    status: string,
    jobDescription: string,
    workProgress: string,
    condition: string, 
    url: string,
    email: string,
    remarks: string,
    date: string,
    Agent: {
        id: string,
        contact: string,
        Name: string,
        Email: string,        
        Department: string
    }
}     
export default Data