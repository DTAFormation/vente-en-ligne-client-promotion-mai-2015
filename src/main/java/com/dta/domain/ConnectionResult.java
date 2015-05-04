package com.dta.domain;

public class ConnectionResult {
	
	private boolean connected;

	public ConnectionResult() {
	}

	public ConnectionResult(boolean connected) {
		this.connected = connected;
	}

	public boolean isConnected() {
		return connected;
	}

	public void setConnected(boolean connected) {
		this.connected = connected;
	}
	
}
