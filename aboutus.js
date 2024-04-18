import React from 'react';

import unknown from './images/Unknown_person.jpg'

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alapati chandra sekhar",
      srn:"PES2UG22CS052",
      position: "Frontend Developer",
      image: unknown, // Use the imported images
    },
    {
      name: "Alluri Tausiq Varma",
      srn:"PES2UG22CS053",
      position: "Backend Developer",
      image: unknown,
    },
    {
      name: "Aayush kumar",
      srn:"PES2UG22CS012",
      position: "Designer",
      image: unknown,
    }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
          .TeamMember {
            margin-bottom: 20px;
            background-color: green;
          }

          .TeamMemberImage {
            width: 150px;
            height: 150px;
            border-radius: 50%;
          }
        `}
      </style>

      <h1>Meet Our Team</h1>
      {teamMembers.map((member, index) => (
        <div className="TeamMember" key={index}>
          <img className="TeamMemberImage" src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <h3>{member.srn}</h3>
          <h3>{member.position}</h3>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
