if (Meteor.isClient) {
    
}

Template.layout.rendered = function() {
    IonSideMenu.snapper.disable();
};

/*Template.index.events({ 
	'click .search': function (event) {
   		Router.go('cariPotensi');
   	}
});*/