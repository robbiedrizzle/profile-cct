var Profile_CCT_PAGE = {
	tabs_shell : 0,
	
	onReady : function() {
		
		// tabs
		Profile_CCT_PAGE.tabs_shell = jQuery( "#tabs" );
		Profile_CCT_PAGE.startTabs();	
		
		jQuery('.hide-if-js',Profile_CCT_PAGE.tabs_shell).removeClass('hide-if-js'); // this helps with showing the meta boxes 
		jQuery('.add-multiple').click(Profile_CCT_PAGE.addFields);
		jQuery('.remove-fields').live('click',Profile_CCT_PAGE.removeFields);
		
		// placed right after tb_show call
		jQuery("#TB_window,#TB_overlay,#TB_HideSelect").one("unload",Profile_CCT_PAGE.killTheDamnUnloadEvent);
		
		if(typeof window.tb_remove == 'function') {
			window.tb_remove = function() {
				// replace the previous function with the new one
				jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').unload("#TB_ajaxContent").unbind().remove();});
			}
		}

	},
	startTabs: function (){
		if(Profile_CCT_PAGE.tabs_shell)
			Profile_CCT_PAGE.tabs_shell = jQuery( "#tabs" );
		
		Profile_CCT_PAGE.tabs_shell.tabs();
		
	},
	
	addFields : function(e){
		e.preventDefault();
		var link = jQuery(this);
		
		var count = link.prev().data('count');
		link.prev().clone().insertBefore( link );
		
				
		// add the remove link unless there is non
		if( !link.prev().children('a.remove-fields').length ){
			
			link.prev().append('<a href="#" class="remove-fields button">Remove</a>');
		}
		link.prev().data('count',count+1);
		
		link.prev().find('input,select,textarea').each(function(index, value){
			var new_count = jQuery(this).parent().parent().data('count');
			
			var name = jQuery(this).attr('name');
		
			var new_name = name.replace(count, new_count);
		
			jQuery(this).attr('name',new_name).val('');
			
			
			
		});
		//if(link.prev().find('.remove-fields'))
		
	},
	removeFields: function(e) {
		e.preventDefault();
		var link = jQuery(this);
		link.parent().remove();
	}
};

jQuery(document).ready(Profile_CCT_PAGE.onReady);