class UserDTO {
	constructor(user) {
		this._id = user._id;
		this.first_name = user.first_name;
		this.last_name = user.last_name;
		this.email = user.email;
		this.age = user.age;
		this.password = user.password;
		this.cart = user.cart;
		this.role = user.role || 'USER';
		this.last_connection = user.last_connection || {
			register_date: Date(),
			login_date: Date(),
			logout_date: Date(),
		};
	}
}

module.exports = UserDTO;
