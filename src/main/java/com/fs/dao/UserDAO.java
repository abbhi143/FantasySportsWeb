package com.fs.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.fs.pojo.User;

public class UserDAO {

	Connection con;
	public UserDAO(Connection con)
	{
		this.con=con;
	}
	public void insertUser(User user)throws Exception
	{
	    PreparedStatement pstmt = null;
	    try {
	    
	      String query = "insert into users(first_name,last_name,email,points,password,approval) values(?, ?, ?,?,?,?)";

	      pstmt = con.prepareStatement(query); // create a statement
	      pstmt.setString(1, user.getFirstName()); // set input parameter 1
	      pstmt.setString(2, user.getLastName()); // set input parameter 2
	      pstmt.setString(3, user.getEmail()); // set input parameter 3
	      pstmt.setInt(4, 0); // set input parameter 4
	      pstmt.setString(5, user.getPassword()); // set input parameter 5
	      pstmt.setInt(6, 0); // set input parameter 6
	      pstmt.executeUpdate(); // execute insert statement
	    } catch (Exception e) {
	      e.printStackTrace();
	    } finally {
	      pstmt.close();
	      con.close();
	    }
	  }
}
