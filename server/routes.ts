import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema, insertContactMessageSchema } from "@shared/schema";
import { sendContactNotification, sendAppointmentNotification } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Health check endpoint for deployment
  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      // Send email notification
      const notificationEmail = process.env.NOTIFICATION_EMAIL;
      if (notificationEmail) {
        sendAppointmentNotification(validatedData, notificationEmail).catch(err => {
          console.error("Failed to send appointment email notification:", err);
        });
      }
      
      res.status(201).json(appointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      res.status(400).json({ error: "Invalid appointment data" });
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
      const notificationEmail = process.env.NOTIFICATION_EMAIL;
      if (notificationEmail) {
        sendContactNotification(validatedData, notificationEmail).catch(err => {
          console.error("Failed to send contact email notification:", err);
        });
      }
      
      res.status(201).json(message);
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(400).json({ error: "Invalid contact message data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  return httpServer;
}
