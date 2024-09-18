export const dummyData = [
  {
    "id": 1,
    "name": "John Doe",
    "school_id": "UNI001",
    "role": "patient",
    "email": "john.doe@university.edu",
    "medical_records": {
      "allergies": ["penicillin"],
      "blood_type": "A+",
      "last_checkup": "2023-12-15",
      "height": "180 cm",
      "weight": "75 kg",
      "bmi": 23.1
    },
    "emergency_contact": {
      "name": "Jane Doe",
      "relationship": "Spouse",
      "phone": "555-1234"
    },
    "appointments": [
      {
        "id": "APT001",
        "date": "2024-03-20T10:00:00Z",
        "doctor_id": 2,
        "purpose": "Annual checkup"
      }
    ],
    "test_results": [
      {
        "id": "TEST001",
        "date": "2024-01-15T14:30:00Z",
        "type": "Blood Test",
        "result": "Normal",
        "doctor_id": 2
      }
    ],
    "medications": [
      {
        "name": "Lisinopril",
        "dosage": "10mg",
        "frequency": "Once daily",
        "prescribed_by": 2,
        "start_date": "2024-01-01",
        "end_date": "2024-06-30"
      }
    ],
    "messages": [
      {
        "id": "MSG001",
        "date": "2024-03-10T09:15:00Z",
        "from_id": 2,
        "content": "Your recent test results look good. Keep up the good work!"
      }
    ]
  },
  {
    "id": 2,
    "name": "Alice Smith",
    "school_id": "UNI002",
    "role": "doctor",
    "email": "alice.smith@university.edu",
    "specialization": "Cardiology",
    "license_number": "MD12345",
    "patients": [1, 5, 8],
    "appointments": [
      {
        "id": "APT001",
        "date": "2024-03-20T10:00:00Z",
        "patient_id": 1,
        "purpose": "Annual checkup"
      },
      {
        "id": "APT002",
        "date": "2024-03-21T14:00:00Z",
        "patient_id": 5,
        "purpose": "Follow-up"
      }
    ],
    "schedule": {
      "monday": "09:00-17:00",
      "tuesday": "09:00-17:00",
      "wednesday": "09:00-13:00",
      "thursday": "09:00-17:00",
      "friday": "09:00-17:00"
    },
    "notifications": [
      {
        "id": "NOTIF001",
        "date": "2024-03-15T08:30:00Z",
        "type": "New Test Result",
        "content": "New blood test results available for patient John Doe"
      }
    ]
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "school_id": "UNI003",
    "role": "nurse",
    "email": "bob.johnson@university.edu",
    "department": "Emergency",
    "shift": "Night",
    "certification": "RN",
    "assigned_patients": [4, 9, 12],
    "tasks": [
      {
        "id": "TASK001",
        "patient_id": 4,
        "description": "Administer medication",
        "status": "Pending",
        "due_time": "2024-03-16T22:00:00Z"
      }
    ],
    "schedule": {
      "monday": "20:00-08:00",
      "tuesday": "20:00-08:00",
      "wednesday": "Off",
      "thursday": "20:00-08:00",
      "friday": "20:00-08:00",
      "saturday": "Off",
      "sunday": "Off"
    },
    "notifications": [
      {
        "id": "NOTIF002",
        "date": "2024-03-15T20:15:00Z",
        "type": "New Doctor's Order",
        "content": "New medication order for patient Emma Brown"
      }
    ]
  },
  {
    "id": 4,
    "name": "Emma Brown",
    "school_id": "UNI004",
    "role": "patient",
    "email": "emma.brown@university.edu",
    "medical_records": {
      "allergies": ["latex"],
      "blood_type": "O-",
      "last_checkup": "2024-01-10",
      "height": "165 cm",
      "weight": "60 kg",
      "bmi": 22.0
    },
    "emergency_contact": {
      "name": "Michael Brown",
      "relationship": "Father",
      "phone": "555-5678"
    },
    "appointments": [
      {
        "id": "APT003",
        "date": "2024-03-25T11:30:00Z",
        "doctor_id": 6,
        "purpose": "Follow-up"
      }
    ],
    "test_results": [
      {
        "id": "TEST002",
        "date": "2024-02-20T10:45:00Z",
        "type": "X-Ray",
        "result": "No abnormalities detected",
        "doctor_id": 6
      }
    ],
    "medications": [
      {
        "name": "Ibuprofen",
        "dosage": "400mg",
        "frequency": "As needed",
        "prescribed_by": 6,
        "start_date": "2024-02-20",
        "end_date": "2024-03-20"
      }
    ],
    "messages": []
  },
  {
    "id": 5,
    "name": "David Lee",
    "school_id": "UNI005",
    "role": "patient",
    "email": "david.lee@university.edu",
    "medical_records": {
      "allergies": [],
      "blood_type": "B+",
      "last_checkup": "2023-11-20",
      "height": "175 cm",
      "weight": "70 kg",
      "bmi": 22.9
    },
    "emergency_contact": {
      "name": "Sarah Lee",
      "relationship": "Mother",
      "phone": "555-9012"
    },
    "appointments": [
      {
        "id": "APT002",
        "date": "2024-03-21T14:00:00Z",
        "doctor_id": 2,
        "purpose": "Follow-up"
      }
    ],
    "test_results": [],
    "medications": [],
    "messages": []
  },
  {
    "id": 6,
    "name": "Sophia Garcia",
    "school_id": "UNI006",
    "role": "doctor",
    "email": "sophia.garcia@university.edu",
    "specialization": "Pediatrics",
    "license_number": "MD67890",
    "patients": [4, 9, 12],
    "appointments": [
      {
        "id": "APT003",
        "date": "2024-03-25T11:30:00Z",
        "patient_id": 4,
        "purpose": "Follow-up"
      }
    ],
    "schedule": {
      "monday": "08:00-16:00",
      "tuesday": "08:00-16:00",
      "wednesday": "08:00-12:00",
      "thursday": "08:00-16:00",
      "friday": "08:00-16:00"
    },
    "notifications": []
  },
  {
    "id": 7,
    "name": "Michael Wilson",
    "school_id": "UNI007",
    "role": "nurse",
    "email": "michael.wilson@university.edu",
    "department": "Oncology",
    "shift": "Day",
    "certification": "LPN",
    "assigned_patients": [5, 8, 11],
    "tasks": [
      {
        "id": "TASK002",
        "patient_id": 5,
        "description": "Change IV",
        "status": "Completed",
        "due_time": "2024-03-16T10:00:00Z"
      }
    ],
    "schedule": {
      "monday": "07:00-19:00",
      "tuesday": "07:00-19:00",
      "wednesday": "Off",
      "thursday": "07:00-19:00",
      "friday": "07:00-19:00",
      "saturday": "Off",
      "sunday": "Off"
    },
    "notifications": []
  },
  {
    "id": 8,
    "name": "Olivia Taylor",
    "school_id": "UNI008",
    "role": "patient",
    "email": "olivia.taylor@university.edu",
    "medical_records": {
      "allergies": ["peanuts"],
      "blood_type": "AB-",
      "last_checkup": "2024-02-05",
      "height": "170 cm",
      "weight": "65 kg",
      "bmi": 22.5
    },
    "emergency_contact": {
      "name": "James Taylor",
      "relationship": "Brother",
      "phone": "555-3456"
    },
    "appointments": [],
    "test_results": [],
    "medications": [],
    "messages": []
  },
  {
    "id": 9,
    "name": "Ethan Martinez",
    "school_id": "UNI009",
    "role": "patient",
    "email": "ethan.martinez@university.edu",
    "medical_records": {
      "allergies": ["shellfish"],
      "blood_type": "A-",
      "last_checkup": "2023-10-30",
      "height": "182 cm",
      "weight": "80 kg",
      "bmi": 24.2
    },
    "emergency_contact": {
      "name": "Isabella Martinez",
      "relationship": "Sister",
      "phone": "555-7890"
    },
    "appointments": [],
    "test_results": [],
    "medications": [],
    "messages": []
  },
  {
    "id": 10,
    "name": "Ava Anderson",
    "school_id": "UNI010",
    "role": "doctor",
    "email": "ava.anderson@university.edu",
    "specialization": "Neurology",
    "license_number": "MD24680",
    "patients": [2, 7, 11],
    "appointments": [],
    "schedule": {
      "monday": "09:00-17:00",
      "tuesday": "09:00-17:00",
      "wednesday": "09:00-13:00",
      "thursday": "09:00-17:00",
      "friday": "09:00-17:00"
    },
    "notifications": []
  },
  {
    "id": 11,
    "name": "Noah Thomas",
    "school_id": "UNI011",
    "role": "patient",
    "email": "noah.thomas@university.edu",
    "medical_records": {
      "allergies": [],
      "blood_type": "O+",
      "last_checkup": "2024-03-01",
      "height": "178 cm",
      "weight": "72 kg",
      "bmi": 22.7
    },
    "emergency_contact": {
      "name": "Emma Thomas",
      "relationship": "Mother",
      "phone": "555-2345"
    },
    "appointments": [],
    "test_results": [],
    "medications": [],
    "messages": []
  },
  {
    "id": 12,
    "name": "Isabella Clark",
    "school_id": "UNI012",
    "role": "patient",
    "email": "isabella.clark@university.edu",
    "medical_records": {
      "allergies": ["dairy"],
      "blood_type": "B-",
      "last_checkup": "2023-09-15",
      "height": "168 cm",
      "weight": "58 kg",
      "bmi": 20.5
    },
    "emergency_contact": {
      "name": "William Clark",
      "relationship": "Father",
      "phone": "555-6789"
    },
    "appointments": [],
    "test_results": [],
    "medications": [],
    "messages": []
  },
  {
    "id": 13,
    "name": "Liam Rodriguez",
    "school_id": "UNI013",
    "role": "nurse",
    "email": "liam.rodriguez@university.edu",
    "department": "Pediatrics",
    "shift": "Rotating",
    "certification": "RN",
    "assigned_patients": [1, 4, 8],
    "tasks": [],
    "schedule": {
      "monday": "07:00-19:00",
      "tuesday": "Off",
      "wednesday": "19:00-07:00",
      "thursday": "Off",
      "friday": "07:00-19:00",
      "saturday": "19:00-07:00",
      "sunday": "Off"
    },
    "notifications": []
  },
  {
    "id": 14,
    "name": "Charlotte Lewis",
    "school_id": "UNI014",
    "role": "doctor",
    "email": "charlotte.lewis@university.edu",
    "specialization": "Orthopedics",
    "license_number": "MD13579",
    "patients": [3, 6, 10],
    "appointments": [],
    "schedule": {
      "monday": "08:00-16:00",
      "tuesday": "08:00-16:00",
      "wednesday": "08:00-12:00",
      "thursday": "08:00-16:00",
      "friday": "08:00-16:00"
    },
    "notifications": []
  },
  {
    "id": 15,
    "name": "Mason Lee",
    "school_id": "UNI015",
    "role": "patient",
    "email": "mason.lee@university.edu",
    "medical_records": {
      "allergies": ["penicillin", "sulfa"],
      "blood_type": "AB+",
      "last_checkup": "2024-01-20"
    },
    "emergency_contact": {
      "name": "Evelyn Lee",
      "relationship": "Spouse",
      "phone": "555-0123"
    }
  },
  {
    "id": 16,
    "name": "Harper Walker",
    "school_id": "UNI016",
    "role": "nurse",
    "email": "harper.walker@university.edu",
    "department": "Surgery",
    "shift": "Day",
    "certification": "CRNA"
  },
  {
    "id": 17,
    "name": "Elijah Hall",
    "school_id": "UNI017",
    "role": "patient",
    "email": "elijah.hall@university.edu",
    "medical_records": {
      "allergies": [],
      "blood_type": "A+",
      "last_checkup": "2023-11-05"
    },
    "emergency_contact": {
      "name": "Sophia Hall",
      "relationship": "Mother",
      "phone": "555-4567"
    }
  },
  {
    "id": 18,
    "name": "Amelia Young",
    "school_id": "UNI018",
    "role": "doctor",
    "email": "amelia.young@university.edu",
    "specialization": "Dermatology",
    "license_number": "MD97531",
    "patients": [13, 15, 17]
  },
  {
    "id": 19,
    "name": "Benjamin King",
    "school_id": "UNI019",
    "role": "nurse",
    "email": "benjamin.king@university.edu",
    "department": "Intensive Care",
    "shift": "Night",
    "certification": "RN"
  },
  {
    "id": 20,
    "name": "Mia Scott",
    "school_id": "UNI020",
    "role": "patient",
    "email": "mia.scott@university.edu",
    "medical_records": {
      "allergies": ["aspirin"],
      "blood_type": "O-",
      "last_checkup": "2024-02-28"
    },
    "emergency_contact": {
      "name": "Daniel Scott",
      "relationship": "Father",
      "phone": "555-8901"
    }
  }
]