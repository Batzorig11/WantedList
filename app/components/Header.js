import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function Header() {
  return (
    <div className="flex-col justify-center items-center w-full h-[400px] bg-green-500 text-white font-bold  ">
      <h1 className="text-5xl w-full text-center">
        Welcome to Our Marketplace
      </h1>
      <div className="w-[30%] mx-auto mt-8 justify-end grid-cols-1 gap-2 flex">
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>NO NONONON</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>{" "}
      </div>
    </div>
  );
}
