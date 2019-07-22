const myInfo={
    first_name:"Darius",
    last_name:"Thomas",
    level:"Entry",
    position:{
        primary:"Front-end",
        secondary:"Full-Stack"
    },
    education:"Coding Bootcamp",
    about_me:'Hi I\'m Darius! Im a Junior developer with a passion for Front-end development and an eagerness for Full-stack engineering.I started my software development carreer as a Mechanical Engineering student studying MatLab coding methods and Arduino programing scripts. From that, I discovered my passion for software development. Since then, I enrolled in a full-stack web development bootcamp where I studied several web development languages in both the front and back end. Iv\'e learned several techniqes employing these languages, and am more than enthusiastic to create web applications utilizing these tools. I\'m very exited about the front end and am very eager to work with creative UX/UI designers to bring their designs to life. I hope to grow my language repertoire in any way suitable to fit the goals of any designer and client. I look forward to working with you.',
    phone:"(954) 997-2352",
    gmail:"Darius.D.Thomas@gmail.com",
    linkedin:"N/A"
}

interface IInfo {
    // [key:string]:any is for jquery reference
    [key:string]:any,
    first_name:String,
    last_name:String,
    level:String,
    position:{
        primary:String,
        secondary:String
    },
    education:String,
    about_me:String,
    phone:String,
    gmail:String,
    linkedin:String
}
export {
    myInfo,
    IInfo
}