
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"

export default function StreamLineLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    🚀 New: AI-powered automation features
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Streamline Your
                    <span className="text-blue-600"> Workflow</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-[600px]">
                    Boost productivity by 300% with our all-in-one platform. Manage projects, collaborate with teams,
                    and automate repetitive tasks seamlessly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="StreamLine Dashboard"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Live Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything you need to succeed
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Powerful features designed to help teams collaborate better and achieve more together.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time collaboration tools that keep your team connected and productive, no matter where they
                    are.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Smart Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI-powered automation that handles repetitive tasks, so you can focus on what matters most.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive insights and reporting to track progress and make data-driven decisions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Loved by teams worldwide</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                See what our customers have to say about StreamLine and how it's transformed their workflows.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription>
                    "StreamLine has completely transformed how our team works. We've increased our productivity by 250%
                    and our project delivery time has improved dramatically."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah Johnson"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Product Manager, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription>
                    "The automation features are incredible. What used to take hours now happens automatically. Our team
                    can focus on creative work instead of repetitive tasks."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Michael Chen"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">CTO, StartupXYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription>
                    "StreamLine's analytics give us insights we never had before. We can make better decisions and our
                    clients love the transparency it provides."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emily Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Agency Owner, CreativeFlow</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Pricing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Choose the perfect plan for your team. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small teams getting started</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$9</span>
                    <span className="text-muted-foreground">/user/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Start Free Trial</Button>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Up to 5 team members</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>10 projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Basic automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Best for growing teams and businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="text-muted-foreground">/user/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Start Free Trial</Button>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Up to 25 team members</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Advanced automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Advanced analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations with advanced needs</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$39</span>
                    <span className="text-muted-foreground">/user/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Sales
                  </Button>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Custom automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Enterprise security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to streamline your workflow?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of teams who have already transformed their productivity with StreamLine. Start your free
                trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-400">
                Streamline your workflow and boost productivity with our all-in-one platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
