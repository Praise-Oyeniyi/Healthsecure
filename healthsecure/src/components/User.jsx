import { dummyData } from '@/constants/data'
import React from 'react'

const User = () => {
  return (
    <div>
        <div className="patient-outer space-y-4">
            <h3 className='text-lg font-bold'>My Information</h3>
            <div className='pr-7 space-y-14'>
                
                <div className="flex justify-between items-start">
                    <div className='w-[20%]'>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>
                            Personal Information
                        </h4>
                        <div className="text-gray-700 text-sm space-y-1">
                            <h6>Name: {dummyData[0].name}</h6>
                            <h6>Matric No: {dummyData[0].school_id}</h6>
                            <h6>Email: {dummyData[0].email}</h6>
                            <h6>Blood Type: {dummyData[0]?.medical_records.blood_type}</h6>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>
                            Medical Records
                        </h4>
                        <div className="text-gray-700 text-sm space-y-1">
                            <h6>Allergies: {dummyData[0].medical_records?.allergies.map((e)=>e)}</h6>
                            <h6>Last Checkup: {dummyData[0].medical_records?.last_checkup}</h6>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>
                            Emergency Contact Info
                        </h4>
                        <div className="text-gray-700 text-sm space-y-1">
                            <h6>Name: {dummyData[0]?.emergency_contact?.name}</h6>
                            <h6>Relationship: {dummyData[0]?.emergency_contact?.relationship}</h6>
                            <h6>Phone: {dummyData[0]?.emergency_contact?.phone}</h6>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between items-start'>
                    <div className='w-[20%]'>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>Medicals</h4>
                        <div>
                            <h5 className='text-sm font-semibold tracking-wide pb-1'>
                                Medications
                            </h5>
                            {dummyData[0]?.medications.map((e,index) =>(
                                <div className="text-gray-700 text-sm space-y-1" key={index}>
                                    <h6>Name: {e.name}</h6>
                                    <h6>Dosage: {e.dosage}</h6>
                                    <h6>Frequency: {e.frequency}</h6>
                                    <h6>Prescribed By: Dr. Smith</h6>
                                    <h6>Start: {e.start_date}</h6>
                                    <h6>End: {e.end_date}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>Upcoming Appointments</h4>
                        <div>
                            <h5 className='text-sm font-semibold tracking-wide pb-1'>
                                Dr. Smith
                            </h5>
                            {dummyData[0]?.appointments.map((e,index) =>(
                                <div className="text-gray-700 text-sm space-y-1" key={index}>
                                    <h6>Date: {e?.date}</h6>
                                    <h6>Purpose: {e?.purpose}</h6>
                                    <h6 className='cursor-pointer border border-gray-300 px-2 py-3 min-w-fit max-w-fit'>Details</h6>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base font-semibold tracking-wide pb-2'>Recent Test Results</h4>
                        {dummyData[0]?.test_results.map((e,index) =>(
                            <div key={index}>
                                <h5 className='text-sm font-semibold tracking-wide pb-1'>
                                    Result: {e.result}
                                </h5>
                                <div className="text-gray-700 text-sm space-y-1 ">
                                    <h6>{e.type}: Hemoglobin</h6>
                                    <h6>Date: {e.date}</h6>
                                    <h6 className=' cursor-pointer border border-gray-300 px-2 py-3 min-w-fit max-w-fit'>View Details</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default User