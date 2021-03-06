import React from 'react';
import './Courses.scss'

export interface ICourse {
  id: number;
  provider: string;
  courses: string[];
}

const Courses: React.FC = () => {

  const data: ICourse[] = [
    {
      id: 1,
      provider: 'GeekBrains',
      courses: ['Frontend Developer']
    },
    {
      id: 2,
      provider: 'Netology',
      courses: ['Modern JavaScript', 'JavaScript in Browser', 'AngularJs, NodeJs and MongoDB']
    },
    {
      id: 3,
      provider: 'Udemy',
      courses: ['Modern React with Redux', 'Angular 8 - The Complete Guide']
    },
    {
      id: 4,
      provider: 'JavaScript.ru',
      courses: ['Angular', 'React']
    }
  ];

  return (
    <div className='courses'>
      {
        data.map((c: ICourse, ind: number) => (
          <div className='course' key={ind}>
            <h4 className="course__provider"> {c.provider} </h4>
            <div className="course__items">
              {c.courses.map((el: string, i: number) => <p className='course__title' key={i}>{el}</p>)}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Courses;
