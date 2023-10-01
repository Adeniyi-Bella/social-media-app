// SuggestedAccounts.jsx
import ClientOnly from "@/app/components/ClientOnly";
import MenuItemFollow from "./MenuItemFollow";

export default function SuggestedAccounts() {
  return (
    <>
      <div className="border-btm" />
      <h3 className="suggested-accounts-header">Suggested accounts</h3>
      <ClientOnly>
        <div className="cursor-pointer">
          <MenuItemFollow
            user={{ id: "1", name: "Test user", image: "https://placehold.co/50" }}
          />
        </div>
      </ClientOnly>
      <button className="lg:block hidden red-text small-padding small-text">
        See all
      </button>
    </>
  );
}
