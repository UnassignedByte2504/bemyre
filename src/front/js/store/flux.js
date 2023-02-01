const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
      resultados: "",
      token_local: sessionStorage.getItem("access_token"),
      current_user: sessionStorage.getItem("current_user"),
      alert: "",
      currentPath: "",
      selected_settings: null,
      user_img_settings: {
        profile_img: sessionStorage.getItem("settings_profile_img")
          ? sessionStorage.getItem("settings_profile_img")
          : null,
        portrait_img: sessionStorage.getItem("settings_portrait_img")
          ? sessionStorage.getItem("settings_portrait_img")
          : null,
      },
      followers: undefined,
      following: undefined,
      reRender: 1,
      profileCardView: "default",
      loggedUsers: [],
      geo_api_key: "c9e7139f5e0b428c9c11c3c069fe8aea",
      provincia:"",
      exploreCategory:"",
      // store locales>>>>>>>>>>>>
      locales: [],
      local: undefined,
      provincias: [],
      cities: [],
      musicGenres: [],
      // store locales<<<<<<<<<<<<<<<
    },
    actions: {
      signUp: async (
        username,
        email,
        password,
        firstname,
        lastname,
        is_musician
      ) => {
        const options = {
          method: "POST",
          body: `{ 
            "user_name":"${username}",
            "email":"${email}",
            "password":"${password}",
            "first_name":"${firstname}",
            "last_name":"${lastname}",
            "is_musician": ${is_musician}
				}
				  `,
        };

        await fetch(`${process.env.BACKEND_URL}/api/signup`, options).then(
          (resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else if (resp.status == 400) {
              sessionStorage.setItem("alert_signup", "Usuario registrado");
            }
            // else {
            //   return sessionStorage.setItem("alert_signup", "Registro incorrecto");
            // }
          }
        );
      },
      login: async (email, password) => {
        const store = getStore();
        await fetch(`${process.env.BACKEND_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else {
              return sessionStorage.setItem(
                "alert_login",
                "Email o password Incorrecto"
              );
            }
          })
          .then((result) => {
            if (result.access_token != undefined) {
              sessionStorage.setItem("access_token", result.access_token);
              sessionStorage.setItem("current_user", result.user_name);
              sessionStorage.setItem("profile_img", result.profile_img);
              window.location.href = `/user/${result.user_name}`;
              setStore({
                store_token: result.access_token,
                logged: true,
              });
              // navigate(`/${result.user_name}`);
            }
          });
      },
      logOut: async (access_token) => {
        sessionStorage.clear();
        window.location.href = "/home";
        setStore({
          token_local: null,
          logged: false,
        });
      },

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back
      fetchUser: async (username) => {
        const store = getStore();
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/${username}`, options)
          .then((response) => response.json())
          .then((result) => setStore({ resultados: result }));
      },
      changePassword: async (username, password, new_password) => {
        const store = getStore();
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            new_password: new_password,
          }),
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/changepassword`,
          options
        )
          .then((response) => response.json())
          .then((window.location.href = `/user/${username}/ajustes`));
      },
      fetchFollowing: async (username) => {
        const store = getStore();

        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/following/${username}`,
          opts
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ following: result });
            sessionStorage.setItem("following_list", result.following);
          });
      },
      fetchFollowers: async (username) => {
        const store = getStore();

        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/followers/${username}`,
          opts
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ followers: result });
            sessionStorage.setItem("followers_list", result.followers);
          });
      },

      editInfoSettings: async (
        username,
        first_name,
        last_name,
        description
      ) => {
        const store = getStore();
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            description: description,
          }),
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/editinfo`,

          options
        )
          .then((response) => response.json())
          .then((result) =>
            sessionStorage.setItem("cambios", "Información cambiada con éxito")
          );
      },

      // Fetch instrumentos perfil

      editInstrumentsProfile: async (
        username,
        instrumento1,
        instrumento2,
        instrumento3,
        stars1,
        stars2,
        stars3
      ) => {
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: `{
          "${instrumento1}": "${instrumento1}",
          "${instrumento2}": "${instrumento2}",
          "${instrumento3}": "${instrumento3}".
          "${stars1}": "${stars1}",
          "${stars2}": "${stars2}",
          "${stars3}": "${stars3}"
      }`,
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/instruments`,
          options
        )
          .then((response) => response.json())
          .then((result) =>
            sessionStorage.setItem(
              "instrumentos",
              "Instrumentos modificados con éxito"
            )
          );
      },

      // Influencias perfil (Videos de youtube)

      influenciasVideoPerfil: async (username, video1, video2) => {
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: `{
    "${video1}": "${video1}",
    "${video2}": "${video2}",
}`,
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/influencesvideo`,
          options
        )
          .then((response) => response.json())
          .then((result) =>
            sessionStorage.setItem(
              "videos_influencias",
              "Videos de influencias modificadas con éxito"
            )
          );
      },

      //Mi estilo de musica y trayectoria
      musicStyleCareer: async (
        username,
        estilo1,
        estilo2,
        estilo3,
        textstyle
      ) => {
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: `{
    "${estilo1}": "${estilo1}",
    "${estilo2}": "${estilo2}",
    "${estilo3}": "${estilo3}",
    "${textstyle}": "${textstyle}",
}`,
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/musicstylecareer`,
          options
        )
          .then((response) => response.json())
          .then((result) =>
            sessionStorage.setItem("Music_style", "Estilo musical actualizado")
          );
      },

      // <<<< Functions realted on fetching user info from back
      //misc functions
      setLocation: (location) => {
        setStore({
          currentPath: location,
        });
      },
      setSelectedSettings: (settings) => {
        setStore({
          selected_settings: settings,
        });
      },
      preProfileImg: (profileImg) => {
        const store = getStore();
        setStore({
          user_img_settings: {
            profile_img: profileImg,
            portrait_img: store.user_img_settings.portrait_img,
          },
        });
      },
      prePortraitImg: (portraitImg) => {
        const store = getStore();
        setStore({
          user_img_settings: {
            profile_img: store.user_img_settings.profile_img,
            portrait_img: portraitImg,
          },
        });
      },
      setFollowers: (data) => {
        setStore({
          followers: data,
        });
      },
      setFollowing: (data) => {
        setStore({
          following: data,
        });
      },
      setReRender: () => {
        const store = getStore();
        let add = store.reRender + 1;
        setStore({
          reRender: add,
        });
      },
      setProfileCardView: (view) => {
        setStore({
          profileCardView: view,
        });
      },
      setLoggedUsers: (data) => {
        const store = getStore();
        // check if users are already
        let loggedUsers = store.loggedUsers;
        let newLoggedUsers = [];
        for (let i = 0; i < data.length; i++) {
          if (loggedUsers.indexOf(data[i]) === -1) {
            newLoggedUsers.push(data[i]);
          }
        }
        setStore({
          loggedUsers: newLoggedUsers,
        });
        console.log(store.loggedUsers);
      },
      setProvincia: (provincia) =>{
        setStore({
          provincia: provincia,
        })
      },
      setExploreCategory: (category) =>{
        setStore({
          exploreCategory: category
        })
      },
      //misc functions
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>funciones endpoints locales
      fetchStates: async () => {
      //   const options = {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const response = await fetch(
      //     `${process.env.BACKEND_URL}/api/España/states`,
      //     options
      //   );
  
      //   const result = await response.json();
      //   // console.log("ESTAS SON LAS PROVINCIAS");
      //   setStore({provincias: result.name});
      await fetch(`${process.env.BACKEND_URL}/api/España/states`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => { 
          setStore({provincias: result});
          // console.log(result);
        });
      },
      fetchCities: async (state) => {
        // const options = {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // };
        // const response = await fetch(
        //   `${process.env.BACKEND_URL}/api/${state}/cities`,
        //   options
        // );
    
        // const result = await response.json();
        // console.log("ESTAS SON LAS cities");
        await fetch(`${process.env.BACKEND_URL}/api/${state}/cities`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => { 
            setStore({cities: result});
            // console.log(result);
          });
        
      },
      fetchMusicGenres: async () => {
        // const options = {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // };
        // const response = await fetch(
        //   `${process.env.BACKEND_URL}/api/music_genres`,
        //   options
        // );
  
        // const result = await response.json();
        // const res = result.map((el) => el.name);
        // console.log(res);
        await fetch(`${process.env.BACKEND_URL}/api/music_genres`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => { 
            setStore({musicGenres: result.map((el) => el.name)});
            console.log(result)
            
          });
        
      },
      modificar: async(newData, id) => {
        let body = new FormData();
        for(let key in newData){
          body.append(key, newData[key]);
        }
        await fetch(process.env.BACKEND_URL + "/api/settings/modifyLocal/" + id, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            // "Content-Type": "application/json",
          },
          body: body,
          // body: newData,
        })
        .then((res) => res.json())
        .then((result) => {          
          getActions().fetchLocales()
          console.log('hello?', result)})
        },
        publicar: async (data) => {
          // FormData() es un objeto de arrays?
          let body = new FormData();
          // se pueden recorrer las key de un objeto (data)??
          for (let key in data) {
            // añade dos valores nuevos iguales o uno es key y otro es valor? el FormData lo transforma en key y valor?
            body.append(key, data[key]);
            // lo siguiente funcionaria igual?
            // body.append(key, data.key);
          }
          
          // en que docu pone que esto lo vuelva objeto?¿... y porque lo añade al body?
          // body.append("token", token);
                
          const options = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${getStore().token_local}`,
            },
            // body: body,
            body: body,
            // body: JSON.stringify(body)
            // en lugar del for no habria sido lo mismo body: data?
          };
          await fetch(`${process.env.BACKEND_URL}/api/settings/publiclocal`, options)
            .then((resp) => resp.json())
            .then((result) => {
              console.log(result)
            getActions().fetchLocales()
          })
        },
        // deleteLocal: async (id) =>{
        //   const options = {
        //     method: "DELETE",
        //     headers: {Authorization: `Bearer ${getStore().token_local}`,
        //   }}
        //   await fetch(`${process.env.BACKEND_URL}/api/settings/deletelocal/${id}`, options)
        //   .then((resp) => resp.json())
        //   .then((result)=>{
        //     console.log("borrado", result)
        //   })
        // },
        fetchLocales: async () => {
          let store = getStore()
          await fetch(`${process.env.BACKEND_URL}/api/settings/locales`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${store.token_local}`,
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              setStore({locales: result});
            });
        },
        fetchLocal: async (id) => {
          await fetch(`${process.env.BACKEND_URL}/api/settings/local/${id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${getStore().token_local}`,
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((result) => { 
              setStore({local: result});
              console.log(result);
            });
        },




      // funciones endpoints locales<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    },
  };
};
export default getState;
