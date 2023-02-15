import React from 'react'
import { Container } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer(){
    return <div>
        <Container sx={{p:5,display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',
        boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'}}>
           <a href='https://github.com/TheMohit2003/search_for_images' target='_blank' className='icons'><GitHubIcon/></a>
            <a href='https://www.linkedin.com/in/mohit-pardeshi-5792aa229/' target="_blank" className='icons'><LinkedInIcon/></a>
        </Container>
    </div>
}