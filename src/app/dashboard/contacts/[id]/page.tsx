"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  details: string;
  createdAt: string;
}

export default function ContactDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container w-full mx-auto py-8">
      <Button variant="outline" onClick={() => router.back()} className="mb-4">
        ← Back
      </Button>

      {loading ? (
        <Skeleton className="h-20 w-full" />
      ) : contact ? (
        <Card className="p-6">
          <h1 className="text-xl font-semibold">
            {contact.firstName} {contact.lastName}
          </h1>
          <p className="text-gray-500 mb-2">{contact.email}</p>
          <p className="text-gray-500 mb-2">{contact.phone}</p>
          <p className="text-gray-800">{contact.details}</p>
          <p className="text-gray-400 text-sm mt-4">
            Submitted on {new Date(contact.createdAt).toLocaleDateString()}
          </p>
        </Card>
      ) : (
        <p className="text-gray-500">Contact not found.</p>
      )}
    </div>
  );
}
