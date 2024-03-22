import { NavItems } from "@/models/Header"
import { UserObject } from "@/models/User"

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },
    about: { label: 'About', page: 'about' },
    Contact: { label: 'Contact', page: 'contact' }  
}

export const userInfo: UserObject = {
    name: 'ALI ASIF',
    picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
    heading: 'I&#39;m a Software Engineer based in Karachi Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 5 years.</p>
        <p>My journey in IT began in 2019 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        `,
    skills: ['React', 'Next', 'Sanity', 'Java Script', 'Type Script',  'AWS', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Tailwind CSS'],   
}

