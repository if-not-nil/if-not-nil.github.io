table = Dict(
    0 => let
        y = x -> x * 2
						  # modules do have a value and can be returned from!
		 # you need a semicolon here v to inline the code
        mod = include("./mod.jl");    # function calls can have space before the parens
        string(y(2), mod)
	end, # => "4lastvalofmod.qux"

		# begin-end matches what we need from a do block
    begin 5 end =>
				# there is unfortunately no block break functionality
				# but you CAN make an IIFE!
        (() -> begin
            return 5
        end)(),

    3 => (() -> begin
				# this is legal, but `return` is executed first
				# so you don't get println's side-effect
        println(return 10)
    end)(), # => 10
) # => the dict
