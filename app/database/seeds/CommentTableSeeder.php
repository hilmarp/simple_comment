<?php

class CommentTableSeeder extends Seeder {
	public function run() {
		DB::table('comments')->delete();

		Comment::create(array(
			'author' => 'Hilmar Pálsson',
			'text' => 'Hæ, ég er bestur!'
		));

		Comment::create(array(
			'author' => 'Baldvin Pálsson',
			'text' => 'Hæ, ég er ruglaður!'
		));

		Comment::create(array(
			'author' => 'Hulda Pálsdóttir',
			'text' => 'Hæ, ég á Mac!'
		));
	}
}