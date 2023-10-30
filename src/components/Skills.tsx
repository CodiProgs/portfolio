import React from 'react';
import SkillsItem from './SkillsItem';

function Skills () {
    return (
        <div className='grid grid-cols-9 gap-10  max-md:gap-6 max-lg:grid-cols-6 max-md:grid-cols-3'>
            <SkillsItem>JavaScript</SkillsItem>
            <SkillsItem>TypeScript</SkillsItem>
            <SkillsItem>React</SkillsItem>
            <SkillsItem>Next.js</SkillsItem>
            <SkillsItem>Nest.js</SkillsItem>
            <SkillsItem>GraphQL</SkillsItem>
            <SkillsItem>Sass/Scss</SkillsItem>
            <SkillsItem>Tailwind</SkillsItem>
            <SkillsItem>PostgreSQL</SkillsItem>
        </div>
        
    );
}

export default Skills;