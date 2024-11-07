import { auth } from "@/auth";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="flex items-center gap-8">
      {user?.image && (
        <div>
          <Image
            src={user?.image ? user.image : "/images/default.png"}
            alt={`profile photo of ${user?.name}`}
            width={90}
            height={90}
          />
        </div>
      )}
      <div className="mt-8">
        <p className="mb-3">ID: {user?.id}</p>
        <p className="mb-3">Name: {user?.name}</p>
        <p className="mb-3">Email: {user?.email}</p>
        <p className="mb-3">Email: {user?.randomKey}</p>
      </div>
    </div>
  );
}
