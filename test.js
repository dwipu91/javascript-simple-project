// [a-zA-Z]{11}
// [0-9]{}
//  /\w/g
// .{1}

var reg2 = new RegExp(/[a-z]/gi);

const patterns = {
  tPhone: /[0-9]/ | /\d{11}/ | /^\d{11}$/,
  password: /^\w.{8,20}$/,
  email: /^([a-z\d\.-]+)@[a-z\d-]$/,
};
