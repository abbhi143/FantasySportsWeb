package com.fs.util;

public class ConnectionConfig {
	
	public String url;
	public String schema;
	public String password;
	public String username;
	public String driver;
	
	public ConnectionConfig() {
		this.url = "";
		this.schema = "";
		this.password = "";
		this.username = "";
		this.driver = "";
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getSchema() {
		return schema;
	}

	public void setSchema(String schema) {
		this.schema = schema;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDriver() {
		return driver;
	}

	public void setDriver(String driver) {
		this.driver = driver;
	}
	
	
}
