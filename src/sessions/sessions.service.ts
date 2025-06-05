import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionsService {
  private sessions: Session[] = [];

  create(createSessionDto: CreateSessionDto): Session {
    const newSession: Session = {
      id: uuidv4(), // Using UUID for consistency
      ...createSessionDto,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.sessions.push(newSession);
    return newSession;
  }

  findAll(): Session[] {
    return this.sessions;
  }

  findOne(id: string): Session {
    const session = this.sessions.find((s) => s.id === id);
    if (!session) {
      throw new NotFoundException(`Session with ID "${id}" not found`);
    }
    return session;
  }

  update(id: string, updateSessionDto: UpdateSessionDto): Session {
    const sessionIndex = this.sessions.findIndex((s) => s.id === id);
    if (sessionIndex === -1) {
      throw new NotFoundException(`Session with ID "${id}" not found`);
    }
    const updatedSession = {
      ...this.sessions[sessionIndex],
      ...updateSessionDto,
      updated_at: new Date(),
    };
    this.sessions[sessionIndex] = updatedSession;
    return updatedSession;
  }

  remove(id: string): void {
    const sessionIndex = this.sessions.findIndex((s) => s.id === id);
    if (sessionIndex === -1) {
      throw new NotFoundException(`Session with ID "${id}" not found`);
    }
    this.sessions.splice(sessionIndex, 1);
  }
}
