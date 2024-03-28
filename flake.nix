{
  description = "a-camarillo.dev portfolio site";

  inputs = { 
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11"; 
    npmlock2nix.url = "github:nix-community/npmlock2nix";
    npmlock2nix.flake = false;
  };
  
  outputs = { self, nixpkgs, npmlock2nix }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      overlays = [
        (self: super: {
          npmlock2nix = pkgs.callPackage npmlock2nix {};
        })
      ];
    };
  in
  {
    devShells.${system} = {
      default = pkgs.npmlock2nix.v2.shell {
        src = ./.;
        nodejs = pkgs.nodejs_latest;
      };
    };
  };
}
