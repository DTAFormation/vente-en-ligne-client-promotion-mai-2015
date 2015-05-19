describe("ConnectService", function() {

    beforeEach(function() {
        module("venteEnLigne");
        sessionStorage.removeItem("connected");
    });

    it("setConnected should write false 'false' without parameter", inject(function(ConnectService) {
        ConnectService.setConnected();
        expect(sessionStorage.getItem("connected")).toEqual("false");
    }));

    it("setConnected should write the user's name", inject(function(ConnectService) {
        var username = "user1";
        ConnectService.setConnected(username);
        expect(sessionStorage.getItem("connected")).toEqual(username);
    }));

    it("setDisconnected should write 'false'", inject(function(ConnectService) {
        ConnectService.setDisconnected();
        expect(sessionStorage.getItem("connected")).toEqual("false");
    }));

    it("isConnected should return false if connection state is undefined", inject(function(ConnectService) {
        expect(ConnectService.isConnected()).toEqual(false);
    }));

    it("isConnected should return false if not connected", inject(function(ConnectService) {
        sessionStorage.setItem("connected", "false");
        expect(ConnectService.isConnected()).toEqual(false);
    }));

    it("isConnected should return true if connected", inject(function(ConnectService) {
        sessionStorage.setItem("connected", "user1");
        expect(ConnectService.isConnected()).toEqual(true);
    }));

    it("getConnectedUser should return null if connection state is undefined", inject(function(ConnectService) {
        expect(ConnectService.getConnectedUser()).toEqual(null);
    }));

    it("getConnectedUser should return null if connection not connected", inject(function(ConnectService) {
        sessionStorage.setItem("connected", "false");
        expect(ConnectService.getConnectedUser()).toEqual(null);
    }));

    it("getConnectedUser should return user's name if connected", inject(function(ConnectService) {
        var username = "user1";
        sessionStorage.setItem("connected", username);
        expect(ConnectService.getConnectedUser()).toEqual(username);
    }));

});