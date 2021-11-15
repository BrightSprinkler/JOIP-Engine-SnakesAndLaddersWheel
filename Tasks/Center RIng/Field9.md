Ladder

if not from field one: go to field 25

if you came from field 1:

            Messages.Add("Welcome to my part of the maze!", "#48f542", true);
            Messages.Add("In here you are mine and mine only.", "#48f542", true);
            Messages.Add("You will listen and do as I say.", "#48f542", true);
            Messages.Add("So start stroking!", "#48f542", true);

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 15,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Ha, do you think you can impress me with that?", "#48f542", true);
            Messages.Add("Pathetic.", "#48f542", true);
            Messages.Add("Put your heart into it and stroke as fast as you can!", "#48f542", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 25,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("I'm still not impressed. Maybe you need to try something different.", "#48f542", true);
            Messages.Add("Only rub the head of your cock a bit.", "#48f542", true);
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
                    Method = StrokingMethod.StrokeHead
                }
            });

            Messages.Add("Stroke normally again but squeeze your balls while you do it.", "#48f542", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 35,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Hmm, that wasn't bad...", "#48f542", true);
            Messages.Add("Slap your balls for me.", "#48f542", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Cbt,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Normal,
                    MetronomeDurationInSeconds = 10,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                CbtParameter = new CbtParameter()
                {
                    Kind = CbtKind.Slap,
                    Intensity = CbtIntensity.Medium
                }
            });

            Messages.Add("Haha, I'm starting to enjoy this!", "#48f542", true);
            WaitForUserConfirmation("Get on your knees for me!", hexColor: "#48f542");
            Messages.Add("Good, now stroke.", "#48f542", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 25,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.StrokeHead
                }
            });

            Messages.Add("Ugh, lame.", "#48f542", true);
            Messages.Add("Oh, I know!", "#48f542", true);
            Messages.Add("Slap your boring cock!", "#48f542", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Cbt,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Slow,
                    MetronomeDurationInSeconds = 10,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                CbtParameter = new CbtParameter()
                {
                    Kind = CbtKind.Slap,
                    Intensity = CbtIntensity.Medium
                }
            });

            Messages.Add("Next, you're going to slap your balls for me.", "#48f542", true);
            Messages.Add("While you do that, stick your tounge out like the obedient pet you are.", "#48f542", true);
            Messages.Add("First I want 5 slaps on your right ball and then 5 slaps on your left ball.", "#48f542", true);
            WaitForUserConfirmation("Take your time and MAKE THEM HURT!", hexColor: "#48f542");

            Messages.Add("Hahaha, seeing you slap your balls like that is great!", "#48f542", true);
            Messages.Add("For the final task you can get up again.", "#48f542", true);
            Messages.Add("Next, I want you to stroke again.", "#48f542", true);
            Messages.Add("During the stroking, I want you to slap your balls as hard as you can whenever I tell you to.", "#48f542", true);
            Messages.Add("Ready. Set. Go!", "#48f542", true);

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 3,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("SLAP those balls!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 17,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("And another SLAP!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 10,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("SLAP!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 1,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("SLAP!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 14,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("SLAP and keep stroking!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 2,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("Another SLAP! I know you like it!", "#48f542");

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fastest,
                    MetronomeDurationInSeconds = 8,
                    PlayMetronomeTimer = true,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });
            Messages.Add("And SLAP your balls as hard as you can to finish!", "#48f542");
            Sleep(3000);

            Messages.Add("You did it!", "#48f542", true);
            Messages.Add("You know what, i really enjoyed that last part...", "#48f542", true);
            Messages.Add("...and I'm going to reward you for it.", "#48f542", true);
            Messages.Add("Take this key and go on.", "#48f542", true);
