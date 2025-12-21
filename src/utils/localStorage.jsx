const employees = [
  {
    "id": "E1",
    "firstName": "Ronty",
    "email": "ronty@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create homepage UI layout",
        "date": "2025-01-10",
        "category": "Design",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve navbar responsive issue",
        "date": "2025-01-12",
        "category": "Bug Fix",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Update Icons",
        "taskDescription": "Replace old icons with new set",
        "date": "2025-01-14",
        "category": "UI",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Write CSS",
        "taskDescription": "Add styling for footer section",
        "date": "2025-01-16",
        "category": "Frontend",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      }
    ]
  },
  {
    "id": "E2",
    "firstName": "Sara",
    "email": "sara@company.com",
    "password": "sara123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "API Integration",
        "taskDescription": "Connect frontend with backend API",
        "date": "2025-01-11",
        "category": "Backend",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Auth Setup",
        "taskDescription": "Implement login authentication",
        "date": "2025-01-13",
        "category": "Security",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Token Fix",
        "taskDescription": "Fix JWT expiration issue",
        "date": "2025-01-15",
        "category": "Bug Fix",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Database Test",
        "taskDescription": "Test MongoDB collections",
        "date": "2025-01-17",
        "category": "Database",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      }
    ]
  },
  {
    "id": "E3",
    "firstName": "Alex",
    "email": "alex@company.com",
    "password": "alex123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Content Writing",
        "taskDescription": "Write landing page content",
        "date": "2025-01-09",
        "category": "Content",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "SEO Update",
        "taskDescription": "Optimize meta tags",
        "date": "2025-01-11",
        "category": "SEO",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskNumber": 3,
        "taskTitle": "Image Compression",
        "taskDescription": "Compress images for faster load",
        "date": "2025-01-13",
        "category": "Performance",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Blog Upload",
        "taskDescription": "Upload weekly blog post",
        "date": "2025-01-18",
        "category": "Content",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": true
      }
    ]
  }
]





const admin = [
  {
    "id": "A1",
    "email": "admin@gmail.com",
    "password": "12"
  }
]

export const setLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
} 
