<?php 


/**
 * profile_cct_picture_field_shell function.
 * 
 * @access public
 * @param mixed $action
 * @param mixed $options. (default: null)
 * @return void
 */
function profile_cct_picture_field_shell( $action, $options=null ) {
	
	if( is_object($action) ):
		$post = $action;
		$action = "display";
		$options = $options['args']['options'];
		$data = $options['args']['data'];
	endif;
	
	$field = Profile_CCT::get_object(); // prints "Creating new instance."
	if( !is_array($options) )
		$options = $field->form_fields['picture']; // stuff that is comming from the db
	
	$default_options = array(
		'type'=>'picture',
		'label'=>'picture',	
		'description'=>'',
		);
		
	$options = (is_array($options) ? array_merge( $default_options, $options ): $default_options );
	$field->start_field($action,$options);
	
	profile_cct_picture_field($data,$options);
	
	$field->end_field( $action, $options );
}
/**
 * profile_cct_picture_field function.
 * 
 * @access public
 * @param mixed $data
 * @param mixed $options
 * @return void
 */
function profile_cct_picture_field( $data, $options ){
	
	extract( $options );
	
	$field = Profile_CCT::get_object();
	
	$show = (is_array($show) ? $show : array());
	
	
}


