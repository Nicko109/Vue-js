<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
   public function __invoke()
   {
       $persons = [
           [
               'id' => '1',
               'name' => 'Ivan',
               'age' => 20,
               'job' => 'developer'
           ],
           [
               'id' => '2',
               'name' => 'Petr',
               'age' => 22,
               'job' => 'manager'
           ],
           [
               'id' => '3',
               'name' => 'Karl',
               'age' => 23,
               'job' => 'designer'
           ],
           [
               'id' => '4',
               'name' => 'Elena',
               'age' => 25,
               'job' => 'hr'
           ],
       ];

      return $persons;
   }
}
