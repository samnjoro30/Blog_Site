<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index(){
        $blogs=Blog::all();
        return response()->json($blogs);
    }
    public function store(Request $request){
        $validated= $request->validate([
            "title"=>"required",
            "description"=>"required"
        ]);
        if($validated){
        $blogs=Blog::create($validated);
        return response()->json([
            "status"=>1,
            "message"=> "blog createdd successfully",
            "data"=>$blogs
        ]);
        }else{
            return response()->json([
                "status"=> 0,
                "message"=> "failed to create blog"
            ]);
        }
    }
}
