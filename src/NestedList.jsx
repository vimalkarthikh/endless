import React, { useState } from 'react';

const NestedList = () => {
  const initialData = [
    {
      id: 1,
      name: 'Apps',
      children: [
        {
          id: 2,
          name: 'VS Code',
          children: [
            {
              id: 3,
              name: 'Project 1',
              children: []
            },
            {
              id: 4,
              name: 'Project 2',
              children: []
            }
          ]
        },
        {
          id: 5,
          name: 'Figma',
          children: [
            {
                id: 6,
                name: 'Project 1',
                children: []
              },
              {
                id: 7,
                name: 'Project 2',
                children: []
              }
          ]
        }
      ]
    },
    {
        id: 8,
        name: 'Personal',
        children: [
          {
            id: 9,
            name: 'Bank',
            children: [
              {
                id: 10,
                name: 'BankData 1',
                children: []
              },
              {
                id: 11,
                name: 'BankData 2',
                children: []
              }
            ]
          },
          {
            id: 12,
            name: 'Certificates',
            children: [
              {
                  id: 13,
                  name: 'Course 1',
                  children: []
                },
                {
                  id: 14,
                  name: 'Course 2',
                  children: []
                }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'E-Books',
        children: [
          {
            id: 16,
            name: 'Power of Mind',
            children: [
              {
                id: 17,
                name: 'Volume 1',
                children: []
              },
              {
                id: 18,
                name: 'Volume 2',
                children: []
              }
            ]
          },
          {
            id: 19,
            name: 'PonniyinSelvan',
            children: [
              {
                  id: 20,
                  name: 'book 1',
                  children: []
                },
                {
                  id: 21,
                  name: 'book 2',
                  children: []
                }
            ]
          }
        ]
      },
      {
        id: 22,
        name: 'Applications',
        children: [
          {
            id: 23,
            name: 'IT Company',
            children: [
              {
                id: 24,
                name: 'company 1',
                children: []
              },
              {
                id: 25,
                name: 'company 2',
                children: []
              }
            ]
          },
          {
            id: 26,
            name: 'Exams',
            children: [
              {
                  id: 27,
                  name: 'Admit Card 1',
                  children: []
                },
                {
                  id: 28,
                  name: 'Admit Cards 2',
                  children: []
                }
            ]
          }
        ]
      },
  ];

  const [data, setData] = useState(initialData);
  const [openFolders, setOpenFolders] = useState([]);

  const handleFolderClick = (folderId) => {
    if (openFolders.includes(folderId)) {
      setOpenFolders(openFolders.filter(id => id !== folderId));
    } else {
      setOpenFolders([...openFolders, folderId]);
    }
  };

  return (
    <div>
      <h2>Nested List</h2>
      <ul className="nested-list">
        {data.map((folder) => (
          <li key={folder.id} className="list-item">
            <span onClick={() => handleFolderClick(folder.id)} className="folder-name">{folder.name}</span>
            {openFolders.includes(folder.id) && (
              <ul>
                {folder.children.map((subfolder) => (
                  <li key={subfolder.id} >
                    <span onClick={() => handleFolderClick(subfolder.id)}>{subfolder.name}</span>
                    {openFolders.includes(subfolder.id) && (
                      <ul>
                        {subfolder.children.map((subsubfolder) => (
                          <li key={subsubfolder.id}>{subsubfolder.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedList;
