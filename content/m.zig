const std = @import("std");

// notice how this is not a runnable program
// we're instead doing everything at top-level, executing it at compile-time
pub const Table = struct {
    pub const zero = blk: {
        // there are no closures in zig,
        // functions are only define-able at the top-level
        // the top-level in zig is a struct, which you can define anywhere anonymously
        const y = struct {
            fn f(x: i32) i32 {
                return x * 2;
            }
        }.f;

        // this is not runtime, however namespaces are structs
        // and structs are types, which are values
        const mod = @import("./mod.zig");

        // we know mod.impl() is a function that can be executed at comptime, since
        // we are not passing an allocator or an Io in. this is a convention not
        // strictly enforced, but much enocouraged since zig 0.16.0
        
        // std.fmt.comptimePrint evaluates to a []const u8 directly at compile-time
        const formatted_val = std.fmt.comptimePrint("{}", .{y(2)});

        // since mod.impl() returns a regular string (not an error union),
        // we call it directly without `catch` or `try`
        break :blk formatted_val ++ mod.impl();
    };

    // zig has a way to define structs where field names are comptime strings
    // it's too verbose for me to include here       vvvvvvvvvvvvvvvvvvvv
    // @Struct(comptime layout, comptime BackingInt, comptime field_names, comptime field_types, comptime field_attrs)

    pub const five = blk: {
        break :blk 5;
    };

    pub const three = three_block: {
     // @compileLog usually executes a statement and kills the program
     // here, the break is evaluated before it. this is, however, valid code
        @compileLog(break :three_block 10);
    };
};

pub fn main() void {
    std.debug.print("{s}\n", .{Table.zero});
    std.debug.print("{}\n", .{Table.five});
    std.debug.print("{}\n", .{Table.three});
}
