Ladder

if you did not come from field 9:
got to end

if you came from field 9:

            Messages.Add("Oh my, you're finally here!", "#fc6203", true);
            Messages.Add("I've been waiting here for so long all alone...", "#fc6203", true);
            Messages.Add("Looking down at your crotch...", "#fc6203", true);
            Messages.Add("... I have to say ...", "#fc6203", true);
            Messages.Add("Eh, not bad. I have seen bet ter but that will do!", "#fc6203", true);
            Messages.Add("Now, darling, start stroking that cock of yours for me.", "#fc6203", true);
            Messages.Add("I want fast strokes through this entire session.", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("That's the fastest you can go?", "#fc6203", true);
            Messages.Add("When I say fast strokes I want the fastest you can do!", "#fc6203", true);
            Messages.Add("Now really show me what you can do!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 20,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("That's much better, darling!", "#fc6203", true);
            Messages.Add("But I think you can do even better.", "#fc6203", true);
            Messages.Add("Do it again but stroke with a really thight grip this time!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 15,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("Truly grand! Your hot stroking is makeing me wet already!", "#fc6203", true);
            Messages.Add("Uhm, let's have a small break...", "#fc6203", true);
            Metronome.StartBpm(100, 30, false, false);

            Messages.Add("Okay, are you ready to stroke again?", "#fc6203", true);
            Messages.Add("Get to the edge for me!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(Abilities.EdgeOnce.Task);
            if (Modules.GetModule<MazeModule>().IsOver) return;

            Messages.Add("Splendid! That was very good.", "#fc6203", true);
            Messages.Add("I'll grant you a short break before I want you to edge again.", "#fc6203", true);
            Metronome.StartBpm(100, 20, false, false);
            WaitForMetronome();

            Messages.Add("Once you edge, I want you to hold it!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(Abilities.EdgeOnce.Task);
            if (Modules.GetModule<MazeModule>().IsOver) return;
            SlideShow.Start(PathManager.Key2Directory);
            Messages.Add("Hold it, darling!", "#fc6203");
            Metronome.StartBpm(100, 20, false, false);
            WaitForMetronome();

            Messages.Add("Oh my, that was difficult, wasn't it?", "#fc6203", true);
            Messages.Add("This time, you don't get a break before stroking again.", "#fc6203", true);
            Messages.Add("Just be careful not to burst!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Great! Just once more!", "#fc6203", true);
            Messages.Add("This time, grab your balls and tub on them while you stroke fast!", "#fc6203", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("That's it. You did quite well.", "#fc6203", true);
            Messages.Add("I thought you were going to cum as soon as you stepped in my chamber.", "#fc6203", true);
            Messages.Add("I'd love to play around some more, but I know that you still have quite a journey in front of you.", "#fc6203", true);
            Messages.Add("You need this, right?", "#fc6203", true);
            Messages.Add("Alright, you deserve it.", "#fc6203", true);
            Messages.Add("Good luck on the rest of your journey!", "#fc6203", true);
