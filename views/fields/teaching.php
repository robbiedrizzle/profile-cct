<?php 

function profile_cct_teaching_field_shell($action, $options ) {
	
	if( is_object($action) ):
		$post = $action;
		$action = "display";
		$options = $options['args']['options'];
		$data = $options['args']['data'];
	endif;
	
	$field = Profile_CCT::get_object(); // prints "Creating new instance."
	
	
	$default_options = array(
		'type' => 'teaching',
		'label'=> 'teaching',
		'description'=> '',
		);
	$options = (is_array($options) ? array_merge( $default_options, $options ): $default_options );
	
	
	$field->start_field($action,$options);
	
	profile_cct_teaching_field($data,$options);
	
	$field->end_field( $action, $options );
	
}
function profile_cct_teaching_field( $data, $options ){

	extract( $options );
	$field = Profile_CCT::get_object();
	
	$field->input_field( array( 'field_id'=>'teaching', 'label'=>'', 'size'=>25, 'row'=>2, 'cols'=>20, 'value'=>$data['teaching'], 'type'=>'textarea') );

}
