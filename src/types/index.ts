import { z } from "zod";

// Projects

export const projectSchema = z.object({

    _id: z.string(),
    ProyectName: z.string(),
    clientName: z.string(),
    description: z.string(),
    // tasks: z.array(),
    // team: z.array(),
    IsActive: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    manager: z.string()
})

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'ProyectName'|'clientName'|'description'>