package com.fs.util;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 * Class GetConnection creates a type Connection. 
 * for example pass in String ("jdbc/AWDHS");
 *
 */
public class ConnectionLocator {

	private DataSource ds;
	private Connection connection;
	
	public void createConnection(String contextString) throws SQLException, NamingException {
		
		Context initCtx = new InitialContext();
		Context envCtx = (Context) initCtx.lookup("java:comp/env");
		ds = (DataSource) envCtx.lookup(contextString);     
		connection = ds.getConnection();
	}

	public Connection getConnection() throws SQLException {
		//return ds.getConnection();
		return connection;
	}

	public void closeConnection() throws SQLException {
		//this.ds.getConnection().close();
		this.connection.close();
	}
	
	public Connection getClientConnection(ConnectionConfig config) throws SQLException
	{
		try {
			Class.forName(config.getDriver());
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		java.util.Properties properties = new java.util.Properties();
		properties.put("user", config.getUsername());
		properties.put("password",config.getPassword());
		try {
			connection = java.sql.DriverManager.getConnection(config.getUrl(),properties);
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return connection;
	}
}
