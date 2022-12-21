const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
    },
    actions: {
	
      signUp: async (username, email, password, firstname, lastname) => {
		const options = {
			method: "POST",
			body: `{ 
				   "user_name":"${username}",
					"email":"${email}",
					"password":"${password}",
					"first_name":"${firstname}",
					"last_name":"${lastname}"
				}
				  `
		  };
	  
		  await fetch(
			"https://3001-unassignedbyte25-bemyre-vgc43hj0dnd.ws-eu79.gitpod.io/api/signup",
			options
		  )
			.then((response) => response.json())
			.then((response) => console.log(response))
		  
      },

      //>>>>> Functions realted with signup and login

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back

      // <<<< Functions realted on fetching user info from back
    },
  };
};
export default getState;
