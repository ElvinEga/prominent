"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  details: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setContacts(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container w-full mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>

      <Card className="border rounded-lg">
        {/* Header */}
        <div className="border-b p-3 flex items-center justify-between bg-gray-100">
          <span className="text-gray-600 font-semibold">Recent Contacts</span>
        </div>

        {/* Contacts List */}
        <div className="divide-y">
          {loading ? (
            <Skeleton className="h-10 w-full my-2" />
          ) : contacts.length === 0 ? (
            <p className="p-4 text-gray-500 text-center">No contacts found</p>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="p-4 flex justify-between hover:bg-gray-100 cursor-pointer"
                onClick={() => router.push(`/dashboard/contacts/${contact.id}`)}
              >
                <div>
                  <p className="font-semibold">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <p className="text-gray-500 text-sm truncate">
                    {contact.details}
                  </p>
                </div>
                <span className="text-gray-400 text-sm">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
