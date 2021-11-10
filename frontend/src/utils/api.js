import axios from "axios";
import React, { useContext, useState } from "react";

const url = "http://localhost:5000/graphql";

const api = {
  authUser: async (email, password) => {
    const data = await axios.post(
      url,
      {
        query: `
              query {
                authUser(email: "${email}", password: "${password}"){
                  _id
                  name
                  phoneNo
                  email
                  password
                  role
                  age
                  sex
                  specialization
                  token
                }
              }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.authUser;
  },
  registerUser: async (
    name = "MacroMedic",
    // phoneNo = "1234567890",
    email = "macro@gmail.com",
    password = "1234"
    // isAdmin = false,
    // role = "Doctor",
    // sex = "M",
    // age = 18,
    // specialization = "Gen Phy"
  ) => {
    const data = await axios.post(
      url,
      {
        query: `
                mutation{
                  registerUser(userInput: {
                    name: "${name}",
                    password: "${password}",
                    phoneNo: "",
                    email: "${email}",
                    role: "patient",
                    sex: "",
                    age: ${0},
                    specialization: ""
                  }) {
                    _id
                  name
                  phoneNo
                  email
                  password
                  role
                  age
                  sex
                  specialization
                  token
                  }
                }
                `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.registerUser;
  },
  getDoctors: async () => {
    const data = await axios.post(
      url,
      {
        query: `
            query{
              getDoctors{
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data.data.data.getDoctors);
    return data.data.data.getDoctors;
  },
  searchParticularDoctor: async (docId) => {
    const data = await axios.post(
      url,
      {
        query: `
            query{
              searchParticularDoctor(userId: "${docId}"){
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.searchParticularDoctor;
  },
  createAppointment: async (docId, date, description, pId) => {
    const data = await axios.post(
      url,
      {
        query: `
            mutation{
              createAppointment(appointmentInput: {
                doctorId: "${docId}",
                date: "${date}",
                description: "${description}",
                patientId: "${pId}",
              }){
                doctorId
                patientId
                _id
                date
                status
              }
            }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    return data.data.data.createAppointment;
  },
  uploadDoc: async (id, files) => {
    console.log(files);
    const postData = new FormData();
    postData.append("id", id);
    postData.append("file", files);
    const data = await axios.post("http://localhost:5000/uploadDoc", postData);
    console.log(data);
    return data;
  },
  searchDoctorByName: async (searchTerm) => {
    const data = await axios.post(
      url,
      {
        query: `
            query{
              searchDoctorByName(searchTerm: "${searchTerm}"){
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.searchDoctorByName;
  },
  searchDoctorBySpecialization: async (searchTerm) => {
    const data = await axios.post(
      url,
      {
        query: `
            query{
              searchDoctorBySpecialization(searchTerm: "${searchTerm}"){
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.searchDoctorBySpecialization;
  },
  updateUserProfile: async (
    ID,
    name,
    phoneNo,
    email,
    password,
    sex,
    age,
    about,
    lat,
    lng
  ) => {
    const data = await axios.post(
      url,
      {
        query: `
              mutation {
                updateUserProfile(userInput: {
                  _id: "${ID}"
                  name: "${name}",
                  phoneNo: "${phoneNo}",
                  email: "${email}",
                  password: "${password}",
                  age: ${age},
                  sex: "${sex}",
                  about: "${about}",
                  location: {
                    latitude: ${lat}
                    longitude: ${lng}
                  }
                }) {
                  name
                  phoneNo,
                  email,
                  password,
                  age,
                  sex,
                  about,
                  location {
                    latitude
                    longitude
                  }
                }
              }
              `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.updateUserProfile;
  },
  authUser: async (email, password) => {
    const data = await axios.post(
      url,
      {
        query: `
          query {
            authUser(email: "${email}", password: "${password}"){
              _id
              name
              phoneNo
              email
              password
              role
              age
              sex
              specialization
              token
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.authUser;
  },
  getUserById: async (ID) => {
    const data = await axios.post(
      url,
      {
        query: `
          query {
            getUserById(userId: "${ID}") {
              name
              phoneNo
              email
              password
              role
              age
              sex
              about
              image
              location {
                latitude
                longitude
              }
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("0000");
    console.log(data.data.data.getUserById);
    return data.data.data.getUserById;
  },
  viewAppointment: async (ID) => {
    const data = await axios.post(
      url,
      {
        query: `
          query {
            viewAppointment(user_id: "${ID}") {
              doctorId {
                name
                image
                specialization
              }
              description
              date
              status
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.viewAppointment;
  },
  cancelAppointment: async (ID) => {
    console.log("ID: ", ID);
    const data = await axios.post(
      url,
      {
        query: `
          query {
            cancelAppointment(appointment_id: "${ID}") {
              msg
            }
          }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    return data.data.data.cancelAppointment.msg;
  },
  getAllAppointments: async (ID) => {
    const data = await axios.post(
      url,
      {
        query: `
          query {
            getAllUpcomingAppointments(user_id: "${ID}") {
              _id
              patientId{
                name
                _id
              }
              doctorId {
                name
                image
                specialization
                _id
              }
              description
              date
              status 
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getAllUpcomingAppointments;
  },
  getAllPreviousAppointments: async (ID) => {
    const data = await axios.post(
      url,
      {
        query: `
        query{
          getAllPreviousAppointments(user_id: "${ID}") {
            _id
            patientId{
              _id
              name
            }
            doctorId {
              name
              phoneNo
              password
              age
              sex
              specialization
              token
              about
              image
              _id
            }
            status
          }
        }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getAllPreviousAppointments;
  },
  getStatsUser: async () => {
    const data = await axios.post(
      url,
      {
        query: `
          query{
            getStatistics_Users 
          }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getStatistics_Users;
  },
  getStatsTotalDocs: async () => {
    const data = await axios.post(
      url,
      {
        query: `
          query{
            getStatistics_Doctors
          }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getStatistics_Doctors;
  },
  getAppointmentsStats: async () => {
    const data = await axios.post(
      url,
      {
        query: `
          query{
            getStatistics_Appointment
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getStatistics_Appointment;
  },
  getSuccessStats: async () => {
    const data = await axios.post(
      url,
      {
        query: `
        query{
          getStatistics_Successful_App
        }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.getStatistics_Successful_App;
  },
  updateProfile_Patient: async (id, user) => {
    console.log("User", user);
    console.log("ID", id);
    const data = await axios.post(
      url,
      {
        query: `
        mutation{
          updateUserProfile(userInput: {
            _id: "${id}",
            name: "${user.name}"
            age: ${user.age}
            sex:"${user.sex}"
            phoneNo:"${user.phoneNo}"
            about:"${user.about}"
          }) {
            _id
            name
            age
            sex
            phoneNo
            about
          }
        }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.updateUserProfile;
  },

  updateProfile_Doctor: async (id, user) => {
    const data = await axios.post(
      url,
      {
        query: `
        mutation{
          updateUserProfile(userInput: {
            _id: "${id}",
            name: "${user.name}"
            age: ${user.age}
            sex:"${user.sex}"
            phoneNo:"${user.phoneNo}"
            about:"${user.about}"
            specialization:"${user.specialization}"
            charge:${user.charges}
          }) {
            _id
            name
            age
            sex
            phoneNo
            about
            specialization
            charge
          }
        }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.data.updateUserProfile;
  },
};

export default api;
