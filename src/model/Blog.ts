import { Document, model, models, Schema } from 'mongoose';

export interface BlogDocument extends Document {
    blog: string;
   
   
  }
  

  const blogSchema = new Schema<BlogDocument>(
    {
      blog: {
        type: String,
        required: true,
      },
     
    },
    { timestamps: true }
  );
  

  export const Blog = models.Blog || model<BlogDocument>('Blog', blogSchema);