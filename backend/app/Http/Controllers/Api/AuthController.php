<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class AuthController extends Controller
{
    public function register(Request $request){
        $validated=$request->validate([
            "username"=>"required",
            "email"=>"required|email|unique:users,email",//this checks against users able for email.
            "password"=> "required",
            "confirmpassword"=>"required|same:password"
        ]);
        if($validated){
        $user=User::create([
            "username"=> $validated["username"],
            "email"=> $validated["email"],
            "password"=> $validated["password"]
        ]);
        
        $token=$user->createToken("token")->accessToken;
        if(!$user){
            return response()->json([
                "status"=>1,
                "message"=> "failed to register",
                "data"=>$user,
                "token"=>$token
            ]);
        }
        return response()->json([
            "status"=>1,
            "message"=> "user registered",
            "data"=>$token
        ]);
            
        }
    }
    public function login(Request $request){
        $validated=$request->validate([
            "email"=> "required",
            "password"=> "required"
        ]);
        if($validated){
            $user=User::where("email",$validated["email"])->first();
            if($user){
                $token=$user->createToken("myToken")->accessToken;
                return response()->json([
                    "status"=> 1,
                    "message"=> "user logged in",
                    "data"=>$user,
                    "token"=>$token
                ]);
            }
        }
    }
    public function logout(){}
    public function index(){
        $user=User::all();
        return response()->json($user);
    }
    public function show(User $user){
        $user2=User::find($user);
        return response()->json($user2);
    }
}
