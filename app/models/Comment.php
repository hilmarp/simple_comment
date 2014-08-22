<?php

class Comment extends Eloquent {
	// Hægt að nota mass assignment á þessa
	protected $fillable = array('author', 'text');
}