import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {

  return (

    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}

      <div className="text-center space-y-3">

        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-500">
          Have questions, feedback, or collaboration ideas?
          We'd love to hear from you.
        </p>

      </div>


      {/* Contact Grid */}

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Form */}

        <Card>

          <CardHeader>
            <CardTitle>
              Send a Message
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <Input placeholder="Your Name" />

            <Input placeholder="Email Address" />

            <Textarea
              placeholder="Write your message..."
              rows={5}
            />

            <Button className="w-full">
              Send Message
            </Button>

          </CardContent>

        </Card>


        {/* Contact Info */}

        <div className="space-y-4">

          <Card>

            <CardContent className="flex items-center gap-4 p-6">

              <Mail className="text-blue-500" />

              <div>
                <p className="font-semibold">
                  Email
                </p>
                <p className="text-sm text-gray-500">
                  support@smarttodo.com
                </p>
              </div>

            </CardContent>

          </Card>


          <Card>

            <CardContent className="flex items-center gap-4 p-6">

              <Phone className="text-green-500" />

              <div>
                <p className="font-semibold">
                  Phone
                </p>
                <p className="text-sm text-gray-500">
                  +91 12345 67890
                </p>
              </div>

            </CardContent>

          </Card>


          <Card>

            <CardContent className="flex items-center gap-4 p-6">

              <MapPin className="text-red-500" />

              <div>
                <p className="font-semibold">
                  Location
                </p>
                <p className="text-sm text-gray-500">
                  Mumbai, India
                </p>
              </div>

            </CardContent>

          </Card>

        </div>

      </div>


      {/* Social Links */}

      <div className="text-center space-y-4">

        <h2 className="text-xl font-semibold">
          Connect with us
        </h2>

        <div className="flex justify-center gap-6">

          <Github className="cursor-pointer hover:text-gray-700" />

          <Linkedin className="cursor-pointer hover:text-blue-600" />

        </div>

      </div>

    </div>

  )
}