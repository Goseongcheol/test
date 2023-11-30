export const increaseAction = (countData) => {
  return {
    type: "INCREASE_NUMBER",
    payload: countData,
  };
};

export const decreaseAction = (countData) => ({
  type: "DECREASE_NUMBER",
  payload: countData,
});

// export const login = (res) => ({
//   accountTypeName: "",
//   cooperIdx: "",
//   createAt: "",
//   email: "",
//   expireToken: "",
//   id: "",
//   idActiveStatus: "",
//   imageUrl: "",
//   memo: "",
//   name: "",
//   officeId: "",
//   officeName: "",
//   password: "",
//   phoneNumber: "",
//   token: "",
//   accountType: "",
//   updateAt: "",
// });

export const loginSuccessAction = (userInfo) => ({
  type: "LOGIN_SUCCESS",
  payload: userInfo,
});
