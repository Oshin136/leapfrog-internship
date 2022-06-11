const personalInfo = {
    name:"Oshin",
    address:"bhaktapur",
    email:"os.gansi@gmail.com",
    interest:"dance",
    education:[
        {
            name:"Prabhat",
            enrolledDate:2000
        },
        {
            name:"CCRC",
            enrolledDate:2015
        },
        {
            name:"Khwopa",
            enrolledDate:2018
        }
    ]
}


for(let edu of personalInfo.education){
    console.log(`Name:${edu.name},Date:${edu.enrolledDate}`)
}