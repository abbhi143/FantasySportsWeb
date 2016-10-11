package com.fs.servlet;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.fs.dao.UserDAO;
import com.fs.pojo.User;
import com.fs.util.ConnectionLocator;


@Path("/user")
public class LoginServlet {
	
	Connection con;
	@POST
	@Path("/register")
    @Consumes("application/json")
	@Produces("application/json")
    public String register(User user) {
		//User user=new User();
		setCon();
		// Insert User details into table. 
		UserDAO ud=new UserDAO(con);
		try {
			ud.insertUser(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return "hello";
    }        
	
	public void setCon()
	{
		ConnectionLocator cl=new ConnectionLocator();
		try {
			cl.createConnection("jdbc/fsdb");
			con=cl.getConnection();
			System.out.println("connection"+con);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
